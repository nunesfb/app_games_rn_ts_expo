import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';

interface HeaderProps {
    onFilterChange: (text: string) => void;
}

function Header ({onFilterChange}: HeaderProps) {
    const [filter, setFilter] = useState<string>('');

    const handleFilter = (text: string) => {
        setFilter(text);
        onFilterChange(text);
    };

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Top Games</Text>
            <TextInput 
                style={styles.input}
                placeholder='Filtre por nome'
                value={filter}
                onChangeText={handleFilter}
            />
        </View>
    )
}

export default Header;