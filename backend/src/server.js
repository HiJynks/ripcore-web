import app from "./app.js";

export const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})