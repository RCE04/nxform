'use server'

import fs from 'node:fs'

export async function handle(formData) {
    const nombre = formData.get('nombre')
    const apellidos = formData.get('apellidos')
    const avatar = formData.get('avatar')
    const buffer = await avatar.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    // console.log(nombre, apellidos, avatar)

    await new Promise((resolve) => setTimeout( resolve, 1000))

    try {
        fs.writeFileSync('public/' + avatar.name, bytes, 'binary')
        return { type: 'success', message: 'Datos guardados'}
    } catch (error) {
        return { type: 'error', message: error.message}
    }

}
