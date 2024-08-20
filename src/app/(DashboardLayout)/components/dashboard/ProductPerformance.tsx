
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Modal,
    Button,
    Input
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ProductPerformance = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [productList, setProductList] = React.useState([]);

    const [companyName, setCompanyName] = React.useState("");
    const [compaignBrief, setCompaignBrief] = React.useState("");
    const [productName, setProductName] = React.useState("");
    const [productType, setProductType] = React.useState("");
    const [audience, setAudience] = React.useState("");
    const [compaignName, setCompaignName] = React.useState("");
    
    const handleCreateCampaign = async () => {
        console.log(companyName);
        console.log(compaignBrief);
        console.log(productName);
        console.log(productType);
        console.log(audience);
        console.log(compaignName);   

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
            campaign_brief: compaignBrief
        })
        });
        const content = await rawResponse.json();
    
        console.log(content);
        setOpen(false);
    }



    useEffect(() => {
        fetch("https://www.123rf.com/apicore-texttoimage/campaign/retrieve/all")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => {
            setProductList(data.data);
            console.log(data.data);
        })
      },[])
    

    return (
        <div>
        <Button onClick={handleOpen}>Create Campaign</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Compaign
          </Typography>

          <Typography id="brief" sx={{ mt: 2 }}>
            Campaign name
          </Typography>
          <Input style={{
            width: "500px"
          }} name='campaign-name' value={compaignName} onChange={(e) => {
            setCompaignName(e.target.value);
          }}/>

          <Typography id="brief" sx={{ mt: 2 }}>
            Campaign brief
          </Typography>
          <Input style={{
            width: "500px"
          }} name='campaign-brief' value={compaignBrief} onChange={(e) => {
            setCompaignBrief(e.target.value);
          }}/>

    
          <Typography id="company" sx={{ mt: 2 }}>
            Company/Branch Name
          </Typography>
          <Input style={{
            width: "500px"
          }} name='campaign-name' value={companyName} onChange={(e) => {
            setCompanyName(e.target.value);
          }}/>



          <Typography id="type" sx={{ mt: 2 }}>
            What are your product or service for?
          </Typography>
          <Input style={{
            width: "500px"
          }} 
          name='product-type'
          value={productType}
          onChange={(e) => {
            setProductType(e.target.value);
          }}
          />     

          <Typography id="name" sx={{ mt: 2 }}>
            Name of product or service
          </Typography>
          <Input style={{
            width: "500px"
          }} name='product-name' value={productName} onChange={(e) => {
            setProductName(e.target.value);
          }}/>      

          <Typography id="audience" sx={{ mt: 2 }}>
            Who would you like to reach?
          </Typography>
          <Input style={{
            width: "500px"
          }} name='product-audience' value={audience} onChange={(e) => {
            setAudience(e.target.value);
          }}/><br/> 
         <Button onClick={handleCreateCampaign}>Create</Button>
        </Box>
      </Modal>

        <DashboardCard title="Compaigns">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Compaign Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Actions
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product) => (
                            <TableRow key={product.campaign_name}>
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
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.campaign_name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                <Chip
                                        sx={{
                                            px: "4px",
                                            // backgroundColor: product.pbg,
                                            // color: "#fff",
                                        }}
                                        size="small"
                                        label={product.status}
                                    ></Chip>
                                </TableCell>
                                <TableCell>
                                    <a href={`/campaigns/${product.id}/`}>Gantt</a>
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
