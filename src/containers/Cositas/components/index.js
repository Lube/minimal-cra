import React, {PropTypes} from 'react'
import {
    DataTable,
    TableHeader
} from 'react-mdl'

import './index.css'

const Cositas = () => (
    <DataTable
        style={{width: '100%'}}
        shadow={0}
        rows={[
            {cosita: 'Chocolate', estado: 'poco', emoji: '🍫'},
            {cosita: 'Jabón', estado: 'poco', emoji: '🛁'},
            {cosita: 'Papel higiénico', estado: 'nada', emoji: '💩'}
        ]}
    >
    <TableHeader
        name="cosita"
        tooltip="The amazing material name"
        className="CositaColumn"
    >
        Cosita
    </TableHeader>
    <TableHeader
        name="estado"
        tooltip="Number of materials"
    >
        Estado
    </TableHeader>
    <TableHeader
        name="emoji"
        tooltip="Price pet unit"
    >
        Emojí
    </TableHeader>
</DataTable>
)

export default Cositas;
