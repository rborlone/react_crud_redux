import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "usuarios",
    initialState: [],
    reducers:{
        agregarUsuario: (state, action) => {
            console.log(action)
            state.push(action.payload);
        },
        actualizarUsuario: (state, action) => {
            console.log(action)
            const {id, nombre, email, fono} = action.payload;
            const usuario = state.find(x => x.id == id)
            if (usuario) {
                console.log(usuario)
                usuario.nombre = nombre;
                usuario.email = email;
                usuario.fono = fono;
            }
        },
        eliminarUsuario: (state, action) => {
            console.log(action)

            const {id} = action.payload;

            const usuario = state.find(x => x.id == id)
            if (usuario) {
                return state.filter(f => f.id !== id)
            }

        }
    }
})

export const {agregarUsuario, actualizarUsuario, eliminarUsuario} = userSlice.actions
export default userSlice.reducer;
