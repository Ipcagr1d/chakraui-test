import { FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem, Select, Checkbox, Button, useBreakpointValue } from "@chakra-ui/react";

const Details = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1});
    return (
        <VStack 
        w='full' 
        h='full' 
        p={10} 
        spacing={10} 
        alignItems='flex-start'>
            <VStack spacing={3} alignItems='flex-start'>
                <Heading size='2xl'>Your details</Heading>
                <Text>If you have an account, click here to log in.</Text>
            </VStack> 
            <SimpleGrid  columns={2} columnGap={3} rowGap={6} w='full'>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='John' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Doe' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Arkham street 21' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder='Dunwich' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value='usa'>United States</option>
                            <option value='uk'>United Kingdom</option>
                            <option value='jp'>Japan</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to billing</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button variant='primary' sixe='lg' w='full'>Place Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default Details;