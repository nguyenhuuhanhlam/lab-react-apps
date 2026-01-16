import { createRoot } from 'react-dom/client'
import './app.css'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
