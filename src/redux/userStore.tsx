import { configureStore } from '@reduxjs/toolkit';

const userStore = configureStore({
  reducer: {
    
  }
});

export default userStore;

/* 
JSON STRUCTURE = {
  message: {
    message: ,
    token: ,
    totalEmployees: ,
    totalVehicles: ,
    totalVehiclesLoggedUser: ,
    user: {
      bio: ,
      cpf: ,
      email: ,
      name: ,
      salary: ,
      vehicles: {
        0: {
          brand: ,
          model: ,
          yer: ,
          km: ,
          color: ,
          status: ,
        },
        1: {
          brand: ,
          model: ,
          yer: ,
          km: ,
          color: ,
          status: ,
        },
        2: {
          brand: ,
          model: ,
          yer: ,
          km: ,
          color: ,
          status: ,
        },
      },
    }
  }
}
*/