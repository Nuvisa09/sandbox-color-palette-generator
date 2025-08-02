export async function POST(request: Request){
    const { payload } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log("Gemini API Response:", data); 
    return new Response(JSON.stringify(data), {
        status: 200,
        headers:{
            'Content-Type': 'application/json'
        }
    });
}
