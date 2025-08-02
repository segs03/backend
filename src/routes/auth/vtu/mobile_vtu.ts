// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import axios from 'axios';

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // VTU.ng credentials
// const VTU_USERNAME = 'your-vtu-username';
// const VTU_PASSWORD = 'your-vtu-password-or-api-key';

// // Types
// interface VTURequest {
//     phone: string;
//     network: string;
//     amount: string;
//     type: 'airtime' | 'data';
// }

// app.post('/api/subscribe', async (req: Request, res: Response) => {
//     const { phone, network, amount, type }: VTURequest = req.body;

//     if (!phone || !network || !amount || !type) {
//         return res.status(400).json({ error: 'Missing required fields' });
//     }

//     const url = `https://vtu.ng/wp-json/api/v1/${type}`;

//     try {
//         const response = await axios.get(url, {
//             params: {
//                 username: VTU_USERNAME,
//                 password: VTU_PASSWORD,
//                 phone,
//                 network,
//                 amount,
//             },
//         });

//         const result = response.data;

//         if (result.status === 'success') {
//             return res.status(200).json({
//                 message: `${type.toUpperCase()} successful: ${result.message}`,
//                 data: result,
//             });
//         } else {
//             return res.status(500).json({ error: result.message || 'Unknown VTU error' });
//         }
//     } catch (error: any) {
//         console.error('VTU API Error:', error.response?.data || error.message);
//         return res.status(500).json({ error: 'Failed to complete VTU transaction' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`⚡️ VTU backend running at http://localhost:${PORT}`);
// });



// app.get('/api/bundles/:network', async (req: Request, res: Response) => {
//     const { network } = req.params;

//     try {
//         const response = await axios.get('https://vtu.ng/wp-json/api/v1/data-plans', {
//             params: {
//                 username: VTU_USERNAME,
//                 password: VTU_PASSWORD,
//                 network
//             }
//         });

//         const result = response.data;

//         if (result.status === 'success') {
//             return res.status(200).json(result.data); // array of bundles
//         } else {
//             return res.status(500).json({ error: result.message || 'Unknown error' });
//         }
//     } catch (error: any) {
//         console.error('Bundle fetch error:', error.response?.data || error.message);
//         return res.status(500).json({ error: 'Failed to fetch data bundles.' });
//     }
// });


// app.get('/api/bundles/:network', async (req: Request, res: Response) => {
//     const { network } = req.params;

//     // Check if we already have cached data for this network
//     if (cache[network] && Date.now() - cache[network].timestamp < CACHE_EXPIRY) {
//         console.log('Returning cached bundles for', network);
//         return res.status(200).json(cache[network].data);
//     }

//     // If not cached or expired, fetch from VTU.ng
//     try {
//         const response = await axios.get('https://vtu.ng/wp-json/api/v1/data-plans', {
//             params: {
//                 username: VTU_USERNAME,
//                 password: VTU_PASSWORD,
//                 network
//             }
//         });

//         const result = response.data;

//         if (result.status === 'success') {
//             // Cache the new data and timestamp
//             cache[network] = {
//                 data: result.data,
//                 timestamp: Date.now(),
//             };

//             console.log('Fetched and cached bundles for', network);
//             return res.status(200).json(result.data);
//         } else {
//             return res.status(500).json({ error: result.message || 'Unknown error' });
//         }
//     } catch (error: any) {
//         console.error('Bundle fetch error:', error.response?.data || error.message);
//         return res.status(500).json({ error: 'Failed to fetch data bundles.' });
//     }
// });

