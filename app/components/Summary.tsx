"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";

const summary = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus, quam ut lobortis maximus, tellus quam sollicitudin nunc, pellentesque venenatis risus augue sed ex. Donec porta arcu sit amet neque rhoncus, vitae vulputate ligula gravida. Nulla ex enim, faucibus ac metus blandit, eleifend facilisis lectus. Quisque consectetur a eros eu aliquet. Aliquam tincidunt, massa id congue vestibulum, leo massa pharetra orci, eget hendrerit est nisi in nunc. Aenean id pretium nibh. Aliquam erat volutpat. Proin vel mollis augue. Maecenas sed augue sit amet quam blandit varius nec accumsan lectus. Cras in dolor non lacus malesuada rutrum nec non tellus. Ut eget mi venenatis, feugiat ligula condimentum, varius purus. Suspendisse eget euismod justo.

Phasellus metus erat, commodo nec enim vitae, tincidunt faucibus nunc. Quisque lobortis augue bibendum dui condimentum dapibus. In in lorem a leo fringilla sollicitudin. Curabitur lacus quam, ultrices ac dolor vitae, vestibulum aliquam ante. Donec tempus, ex vel maximus sodales, enim urna lobortis augue, eget lacinia libero libero sit amet mauris. Ut vulputate sollicitudin arcu, finibus bibendum orci varius nec. Duis a dictum leo. Nulla semper turpis et neque accumsan dignissim. Donec fringilla hendrerit egestas. Aliquam facilisis ante mi, sit amet tristique nisi laoreet ut.

Nullam interdum elit iaculis sapien condimentum tincidunt. Phasellus sed suscipit diam. Donec scelerisque ultricies suscipit. Donec a viverra velit. Aenean suscipit auctor egestas. Nunc ac justo feugiat, vestibulum dolor sed, semper quam. Vivamus viverra rutrum quam, sed fermentum lorem feugiat vel. Sed pulvinar dolor non mi lacinia elementum. Aliquam rutrum consectetur ante. Aliquam auctor dignissim nulla nec tincidunt.

Praesent id suscipit mi, sit amet semper nibh. Aliquam ultricies lectus tellus, ut blandit elit scelerisque vitae. Ut nec ultricies augue. Aenean in interdum nibh. Nulla non quam metus. Pellentesque vitae orci nec sapien interdum ornare eget at magna. Aenean pharetra lacus at ligula cursus, ac elementum augue efficitur.

Ut eleifend aliquet turpis, vitae volutpat erat finibus vel. Vivamus pharetra sapien sed consequat egestas. Fusce rutrum nulla lorem. Vivamus porttitor lectus eget mauris dignissim, sit amet sodales nibh congue. Donec vel risus vel mi laoreet lacinia. Nullam cursus ac felis in vestibulum. Ut posuere ac justo sit amet blandit. Maecenas porttitor orci orci, quis finibus ex lacinia at. Proin condimentum, tortor non hendrerit interdum, metus urna consequat elit, in laoreet ipsum velit posuere diam. Ut gravida massa a tortor dictum, ut varius massa molestie. In congue, ipsum eu bibendum auctor, nisl magna suscipit ex, eu dictum purus nunc malesuada felis. Curabitur eget libero tempor, bibendum dui nec, eleifend augue. Fusce luctus sagittis justo, quis elementum risus lacinia eget. Proin dignissim sem viverra dui iaculis condimentum. Aenean in euismod enim. Pellentesque non pulvinar erat.

In convallis purus purus, gravida maximus tortor iaculis quis. Proin sit amet sapien vitae nisi mollis accumsan. Vivamus consectetur ex a sagittis auctor. Curabitur ut lectus sit amet eros molestie ornare. Vestibulum sit amet volutpat diam. Duis tristique tempus tellus, ut ultricies metus aliquam non. Nam dignissim massa vitae leo gravida interdum. Nullam vitae gravida felis. Aenean ullamcorper tempus aliquam. Cras tristique, lectus eu facilisis semper, magna mi efficitur mi, id lobortis velit ipsum eu sem.

Donec at mauris gravida, rhoncus ipsum nec, porttitor nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut volutpat tortor et mauris viverra, ac feugiat nisi dictum. Sed malesuada interdum magna, nec bibendum velit ultricies volutpat. Suspendisse potenti. Curabitur id sapien sit amet felis condimentum semper ut eu dolor. Ut posuere augue tincidunt commodo imperdiet. Morbi quis sapien quis nisl porta efficitur. Praesent euismod lectus a tortor eleifend tincidunt. Nullam gravida velit quis mi tincidunt, at dictum quam blandit. Pellentesque tortor sapien, ornare nec ligula vitae, vehicula sollicitudin enim. Curabitur semper dolor non mollis viverra. Nunc tortor elit, fermentum quis purus vel, pellentesque rutrum enim. Fusce dictum egestas lectus, sit amet euismod tortor elementum ornare. Praesent placerat lectus bibendum metus auctor placerat. Proin nunc tellus, fringilla sit amet blandit nec, tempus id est.`;

const Summary = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant='outline' color='white' onClick={onOpen}>
        Summarise
      </Button>

      <Modal
        // bg='black'
        // color='white'
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size='full'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Legalised Summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{summary}</ModalBody>

          <ModalFooter>
            <Button variant='outline' colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Summary;
