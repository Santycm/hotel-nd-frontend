import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const comments = [
    {
        id: 1,
        user: 'John Castaño',
        rating: 5,
        comment: 'Excellente servicio y muy amigable!',
    },
    {
        id: 2,
        user: 'Jane Guerra',
        rating: 4,
        comment: 'Muy comodo y buena atencion, volveria de nuevo.',
    },
    {
        id: 3,
        user: 'Alice Giraldo',
        rating: 4,
        comment: 'buena atencion y excelente comida.',
    },
    // Agrega más comentarios según sea necesario
];

const Comments = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? <Star key={i} className="text-yellow-500" /> : <StarBorder key={i} className="text-yellow-500" />);
        }
        return stars;
    };

    return (
        <div className="p-6 bg-gray-100">
            <Typography variant="h4" component="h1" className="pb-8 text-center !font-bold text-blue-600">
                Comentarios y calificaciones <br /> Destacadas
            </Typography>
            <Grid container spacing={3}>
                {comments.map((comment) => (
                    <Grid item xs={12} sm={6} md={4} key={comment.id}>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent>
                                <Typography variant="h6" component="div" className="text-blue-800">
                                    {comment.user}
                                </Typography>
                                <div className="flex items-center mt-2">
                                    {renderStars(comment.rating)}
                                </div>
                                <Typography color="textSecondary" className="mt-2">
                                    {comment.comment}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Comments;