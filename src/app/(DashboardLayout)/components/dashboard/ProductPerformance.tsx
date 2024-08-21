import React, { useEffect, useState } from 'react';
import {
    Typography,
    Box,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Modal,
    Button,
    Input,
    Divider
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { useRouter } from 'next/navigation';

// Define status colors
const statusColors = {
    "Live": "success.main",
    "Pending": "warning.main",
    "Completed": "info.main",
    "Cancelled": "error.main"
};

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
};

const ProductPerformance = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter();
    const [productList, setProductList] = React.useState([]);
    const [companyName, setCompanyName] = React.useState("");
    const [compaignBrief, setCompaignBrief] = React.useState("");
    const [productName, setProductName] = React.useState("");
    const [productType, setProductType] = React.useState("");
    const [audience, setAudience] = React.useState("");
    const [compaignName, setCompaignName] = React.useState("");
    const [postImage, setPostImage] = useState({
        myFile: "",
    });

    const handleCreateCampaign = async () => {
        console.log(companyName);
        console.log(compaignBrief);
        console.log(productName);
        console.log(productType);
        console.log(audience);
        console.log(compaignName);
        console.log(postImage.myFile);

        const rawResponse = await fetch('https://www.123rf.com/apicore-texttoimage/campaign/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name: companyName,
                campaign_name: compaignName,
                target_audience: audience,
                product_type: productType,
                product_name: productName,
                campaign_brief: compaignBrief,
                base64image: postImage.myFile
            })
        });
        const content = await rawResponse.json();

        console.log(content);
        router.push(`/campaigns/${content.campaign_id}`);
        setOpen(false);
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage({ ...postImage, myFile: base64 });
    };

    useEffect(() => {
        fetch("https://www.123rf.com/apicore-texttoimage/campaign/retrieve/all")
            .then(response => response.json())
            .then(data => {
                setProductList(data.data);
                console.log(data.data);
            });
    }, []);

    return (
        <div>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleOpen}
                sx={{ mb: 2 }}
            >
                Create Campaign
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={modalStyle}>
                    <Card>
                        <CardContent>
                            <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                                Create Campaign
                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>Campaign Name</Typography>
                                <Input 
                                    fullWidth 
                                    value={compaignName} 
                                    onChange={(e) => setCompaignName(e.target.value)} 
                                    placeholder="Enter campaign name"
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>Campaign Brief</Typography>
                                <Input 
                                    fullWidth 
                                    multiline 
                                    rows={4} 
                                    value={compaignBrief} 
                                    onChange={(e) => setCompaignBrief(e.target.value)} 
                                    placeholder="Enter campaign brief"
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>Company/Branch Name</Typography>
                                <Input 
                                    fullWidth 
                                    value={companyName} 
                                    onChange={(e) => setCompanyName(e.target.value)} 
                                    placeholder="Enter company name"
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>Product Type</Typography>
                                <Input 
                                    fullWidth 
                                    value={productType} 
                                    onChange={(e) => setProductType(e.target.value)} 
                                    placeholder="Enter product type"
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>Product Name</Typography>
                                <Input 
                                    fullWidth 
                                    value={productName} 
                                    onChange={(e) => setProductName(e.target.value)} 
                                    placeholder="Enter product name"
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>Target Audience</Typography>
                                <Input 
                                    fullWidth 
                                    value={audience} 
                                    onChange={(e) => setAudience(e.target.value)} 
                                    placeholder="Enter target audience"
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="subtitle1" gutterBottom>Product Image</Typography>
                                <Input 
                                    type="file" 
                                    onChange={(e) => handleFileUpload(e)} 
                                    sx={{ mb: 2 }}
                                />
                            </Box>
                            <Box mt={3} display="flex" justifyContent="flex-end">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleCreateCampaign}
                                >
                                    Create
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Modal>

            <DashboardCard title="Campaigns">
                <Box sx={{ overflow: 'auto', width: '100%' }}>
                    <Table
                        aria-label="campaign table"
                        sx={{
                            whiteSpace: "nowrap",
                            mt: 2,
                        }}
                    >
                        <TableHead>
                            <TableRow
                                sx={{
                                    backgroundColor: 'background.default',
                                    borderBottom: '2px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    <Typography variant="subtitle2">ID</Typography>
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    <Typography variant="subtitle2">Campaign Name</Typography>
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    <Typography variant="subtitle2">Status</Typography>
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    <Typography variant="subtitle2">Actions</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productList.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {product.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            {product.campaign_name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            size="small"
                                            label={product.status}
                                            sx={{
                                                backgroundColor: statusColors[product.status] || 'grey',
                                                color: '#fff',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button 
                                            variant="outlined" 
                                            color="primary" 
                                            href={`/campaigns/${product.id}/`}
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </DashboardCard>
        </div>
    );
};

export default ProductPerformance;
