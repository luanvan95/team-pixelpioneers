// lib/api.ts
export const postRequest1 = async (data: any) => {
    const response = await fetch('/api/endpoint1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch from endpoint1');
    }
    return response.json();
  };
  
  export const postRequest2 = async (data: any) => {
    const response = await fetch('/api/endpoint2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch from endpoint2');
    }
    return response.json();
  };
  
  export const postRequest3 = async (data: any) => {
    const response = await fetch('/api/endpoint3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch from endpoint3');
    }
    return response.json();
  };
  