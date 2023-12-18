import { AnimatePresence } from 'framer-motion';
import React from 'react'

const Icon = ({ ElementIcon, size, color }) => {
    return (  
        <ElementIcon 
            fontSize={size}
            color={color}
        />
    );
}
 
export default Icon;