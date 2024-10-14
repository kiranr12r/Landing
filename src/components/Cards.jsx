import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards() {
    return (
        <Card sx={{ maxWidth: { xs: 300, sm: 345, md: 400 }, margin: 'auto', mb: 3 }}>
            <CardMedia
                sx={{ height: { xs: 120, sm: 140, md: 160 } }} // Responsive height
                image="https://i.pinimg.com/originals/4f/4e/e0/4f4ee0bb62ed9016af4edf9946195009.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
                    Kubera
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                    ನಮ್ಮಲ್ಲಿ ಎಲ್ಲಾ ತರಹದ ವೆಲ್ಡಿಂಗ್ ಲೆಥ್ ಕಟಿಂಗ್ ಕೆಲಸ ಮಾಡಿಕೊಡುತ್ತೇವೆ
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
