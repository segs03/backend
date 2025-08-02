// const axios = require('axios');

// async function sendVTU(network, phone, amount, type) {
//     try {
//         const response = await axios.get('https://vtu.ng/wp-json/api/v1/' + type, {
//             params: {
//                 username: 'your-vtu-ng-username',
//                 password: 'your-password-or-api-key',
//                 phone,
//                 network,
//                 amount
//             }
//         });

//         return response.data;
//     } catch (error) {
//         console.error('VTU Error:', error.response?.data || error.message);
//         throw error;
//     }
// }
