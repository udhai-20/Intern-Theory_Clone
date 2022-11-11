import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Flex,
    useDisclosure,
    Image,
    Heading,
  } from "@chakra-ui/react";
  
  export default function Pay() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button
          boxShadow="0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);"
          colorScheme="red"
          size="sm"
          verticalAlign="middle"
          m="10px 0 10px 0px"
          marginRight="-20px"
          w="100%"
          onClick={onOpen}
        >
          Pay Now
        </Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent w="100%" p="2rem" h="auto" backgroundColor="white">
            <Box justifyContent="center" width="100%" h="75px">
              <ModalHeader>Order Sucessfull</ModalHeader>
            </Box>
            <Flex>
              <Image
                w="75px"
                h="75px"
                src="https://imgs.search.brave.com/T32CKhxBrv8Me9FsoS3dX26-vJuMfyCnHoKN4Ov8vwc/rs:fit:300:300:1/g:ce/aHR0cDovL3d3dy5z/b2xpZHJvY2t2aWRl/by5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMDYvc3Vj/Y2Vzcy1pY29uLTEw/MS0zMDB4MzAwLnBu/Zw"
              />
              <Heading ml="1rem" as="h5" size="md">
                Your Order has been Placed Sucessfully
              </Heading>
            </Flex>
            <ModalCloseButton />
            <ModalBody></ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  