let cache: { [key: string]: { data: any, timestamp: number } } = {};
const CACHE_EXPIRY = 10 * 60 * 1000; // Cache expiry time (10 minutes)


// Function to fetch data bundles from VTU.ng API
// app.get('/api/clear-cache', (req: Request, res: Response) => {
//     cache = {};  // Clear cache
//     res.status(200).json({ message: 'Cache cleared successfully!' });
// });
