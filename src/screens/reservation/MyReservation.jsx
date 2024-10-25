import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button, MenuItem } from '@mui/material';

const reservations = [
    {
        id: 1,
        description: 'Reserva en Hotel California',
        date: '2023-10-15',
        guests: 2,
        suiteType: 'Deluxe',
        customerId: '1234567890',
    },
    {
        id: 2,
        description: 'Reserva en Grand Hotel',
        date: '2023-11-20',
        guests: 4,
        suiteType: 'Standard',
        customerId: '0987654321',
    },
    // Agrega más reservas según sea necesario
];

const MyReservation = () => {
    const [filteredReservations, setFilteredReservations] = useState(reservations);
    const [filterDate, setFilterDate] = useState('');
    const [filterSuiteType, setFilterSuiteType] = useState('');
    const [searchCustomerId, setSearchCustomerId] = useState('');

    const handleFilter = () => {
        let filtered = reservations;
        if (filterDate) {
            filtered = filtered.filter(reservation => reservation.date === filterDate);
        }
        if (filterSuiteType) {
            filtered = filtered.filter(reservation => reservation.suiteType === filterSuiteType);
        }
        setFilteredReservations(filtered);
    };

    const handleSearch = () => {
        const foundReservation = reservations.filter(reservation => reservation.customerId === searchCustomerId);
        setFilteredReservations(foundReservation);
    };

    const handleDelete = (id) => {
        const updatedReservations = filteredReservations.filter(reservation => reservation.id !== id);
        setFilteredReservations(updatedReservations);
    };

    return (
        <div className="p-6 bg-gradient-to-br from-contentColor to-gray-800 min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-4xl shadow-lg">
                <CardContent>
                    <Typography variant="h4" component="h1" className="mb-6 text-center text-blue-600">
                        Mis Reservas
                    </Typography>
                    <div className="mb-6">
                        <Typography variant="h6" component="h2" className="mb-4 text-blue-800">
                            Filtrar Reservas
                        </Typography>
                        <div className="flex flex-wrap gap-4">
                            <TextField
                                label="Fecha"
                                type="date"
                                value={filterDate}
                                onChange={(e) => setFilterDate(e.target.value)}
                                InputLabelProps={{ shrink: true }}
                                className="mr-4"
                            />
                            <TextField
                                label="Tipo de Suite"
                                select
                                value={filterSuiteType}
                                onChange={(e) => setFilterSuiteType(e.target.value)}
                                className="mr-4"
                            >
                                <MenuItem value="Standard">Standard</MenuItem>
                                <MenuItem value="Deluxe">Deluxe</MenuItem>
                            </TextField>
                            <Button variant="contained" color="primary" onClick={handleFilter}>
                                Filtrar
                            </Button>
                        </div>
                    </div>
                    <div className="mb-6">
                        <Typography variant="h6" component="h2" className="mb-4 text-blue-800">
                            Buscar Reserva
                        </Typography>
                        <div className="flex flex-wrap gap-4">
                            <TextField
                                label="Buscar por Cédula"
                                value={searchCustomerId}
                                onChange={(e) => setSearchCustomerId(e.target.value)}
                                className="mr-4"
                            />
                            <Button variant="contained" color="primary" onClick={handleSearch}>
                                Buscar
                            </Button>
                        </div>
                    </div>
                    <Grid container spacing={3}>
                        {filteredReservations.map((reservation) => (
                            <Grid item xs={12} sm={6} md={4} key={reservation.id}>
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardContent>
                                        <Typography variant="h6" component="div" className="text-blue-800">
                                            {reservation.description}
                                        </Typography>
                                        <Typography color="textSecondary" className="mt-2">
                                            Fecha: {reservation.date}
                                        </Typography>
                                        <Typography color="textSecondary" className="mt-2">
                                            Número de huéspedes: {reservation.guests}
                                        </Typography>
                                        <Typography color="textSecondary" className="mt-2">
                                            Tipo de Suite: {reservation.suiteType}
                                        </Typography>
                                        <Typography color="textSecondary" className="mt-2">
                                            Cédula del Cliente: {reservation.customerId}
                                        </Typography>
                                        <div className="mt-4 flex space-x-4">
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className="!bg-blue-800"
                                                onClick={() => handleDelete(reservation.id)}
                                            >
                                                Modificar reserva
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className="!bg-blue-800"
                                                onClick={() => handleDelete(reservation.id)}
                                            >
                                                Cancelar Reserva
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default MyReservation;