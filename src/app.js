import express from 'express';
import indexRoutes from './routes/index.routes';
import path from 'path';
import { engine } from 'express-handlebars';

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: "main",
    extname: '.hbs',
}));

app.set('view engine', '.hbs')

app.use(indexRoutes);

export default app;