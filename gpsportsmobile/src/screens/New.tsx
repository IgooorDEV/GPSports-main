import { Center, Heading, Text, Box, CheckIcon } from 'native-base';
import  React  from 'react';
import { Select as NativeBaseSelect } from "native-base";  
import { VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function New(){
    const [service, setService] = React.useState("");
    const qtdPessoa = [{label: "1", value: "p1"},{label: "2", value: "p2"},{label: "3", value: "p3"},{label: "4", value: "p4"},{ label: "5", value: "p5"},{label: "6", value: "p6"},{label: "7", value: "p7"},
    {label: "8", value: "p8"},{label: "9", value: "p9"},{label: "10", value: "p10"},{label: "12", value: "p12"},{label: "13", value: "p13"},{label: "14", value: "p14"},{ label: "15", value: "p15"},
    {label: "Quantas pessoas?", value: "reset"}];
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar evento esportivo" showBackButton/>

            <VStack mt={8} mx={5} alignItems="center">
            <Heading fontFamily="heading" color="purple.500" fontSize="xl" my={5} textAlign="center">
                    GPSPORTS
                </Heading>
            <Heading fontFamily="heading" color="white" fontSize="25" textAlign="center">
                    Crie seu evento de esporte e compartilhe entre amigos!
                </Heading>
            </VStack>
            <VStack mt={8} mx={5} alignItems="center">
                <Input
                mb={2}
                placeholder='Qual nome do seu evento ?'
                />
            </VStack>
            <VStack left="11%" mx={5} alignItems="center" flexDirection="row" textAlign="center">
                <NativeBaseSelect selectedValue={service} 
                    mr="1"
                    h={14}
                    px={4}
                    fontSize="md"
                    right={75}
                    borderColor="gray.600"
                    fontFamily="body"
                    minWidth="50%" 
                    color="gray.300" 
                    accessibilityLabel="Qual esporte?" 
                    placeholder="Qual esporte?" 
                    _selectedItem={{
                    bg: "white.800",
                    endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <NativeBaseSelect.Item label="Futebol" value="fc" />
                    <NativeBaseSelect.Item label="Carimba" value="car" />
                    <NativeBaseSelect.Item label="Vôlei" value="vol" />
                    <NativeBaseSelect.Item label="Basquete" value="basq" />
                    <NativeBaseSelect.Item label="Qual esporte?" value="reset" />
                </NativeBaseSelect>
                <NativeBaseSelect selectedValue={service} 
                    h={14}
                    px={4}
                    fontSize="md"
                    right={75}
                    borderColor="gray.600"
                    fontFamily="body"
                    minWidth="50%" 
                    color="gray.300" 
                    accessibilityLabel="Quantas pessoas?" 
                    placeholder="Quantas pessoas?"
                    _selectedItem={{
                    bg: "white.800",
                    endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    {
                        qtdPessoa.map((pessoa) => (
                            <NativeBaseSelect.Item label={pessoa.label} value={pessoa.value}/>
                        )
                    )}
                </NativeBaseSelect>
            </VStack>
        </VStack>      
    );
}