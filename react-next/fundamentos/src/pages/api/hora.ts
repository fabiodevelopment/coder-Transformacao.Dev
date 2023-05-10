import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(`
        <html>

        <head>
            <title>Hora Certa???</title>
            <style>
                html {
                    color: #eee;
                    background-color: #333;
                    font-size: 5rem;
                }
            </style>
            <script>
                function atualizarHora() {
                    document.querySelector('span').textContent =
                        new Date().toLocaleTimeString('pt-BR')
                }
                setInterval(atualizarHora, 1000)
            </script>
        </head>
        
        <body>
            <b>Hora certa:</b>
            <span>${new Date().toLocaleTimeString('pt-BR')}</span>
        </body>
        
        </html>
    `)
}