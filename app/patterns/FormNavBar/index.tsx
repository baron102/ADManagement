import React, { useEffect, useState } from 'react';
import * as C from './styles';
import advertiseColor from '../../../public/images/Advertise-color.svg';
import preview from '../../../public/images/Preview.svg';
import previewColor from '../../../public/images/Preview-color.svg';
import contact from '../../../public/images/Contact.svg';
import contactColor from '../../../public/images/Contact-color.svg';
import confirm from '../../../public/images/Confirm.svg';
import confirmColor from '../../../public/images/Confirm-color.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function FormNavBar() {
    const [currentStage, setCurrentStage] = useState(0);

    const { route } = useRouter();

    useEffect(() => {
        switch (route) {
            case '/advertise/form':
                setCurrentStage(1);
                break;
            case '/advertise/preview':
                setCurrentStage(2);
                break;
            case '/advertise/contact':
                setCurrentStage(3);
                break;
            case '/advertise/confirm':
                setCurrentStage(4);
                break;
        }
    }, [route]);

    return (
        <C.Container>
            <C.IconContainer title="advertise">
                <Link href="/advertise/form" passHref>
                    <Image draggable="false" layout='fill' src={advertiseColor} alt="preview" />
                </Link>
            </C.IconContainer>
            <C.Separator active={currentStage > 1}/>
            <C.IconContainer title="preview">
                <Link href="/advertise/preview" passHref>
                    <Image draggable="false" layout='fill' src={currentStage > 1 ? previewColor : preview} alt="preview" />
                </Link>
            </C.IconContainer>
            <C.Separator active={currentStage > 2} />
            <C.IconContainer title="contact">
                <Link href="/advertise/contact" passHref>
                    <Image draggable="false" layout='fill' src={currentStage > 2 ? contactColor : contact} alt="contact" />
                </Link>
            </C.IconContainer>
            <C.Separator active={currentStage > 3} />
            <C.IconContainer title="confirm">
                <Link href="/advertise/confirm" passHref>
                    <Image draggable="false" layout='fill' src={currentStage > 3 ? confirmColor : confirm} alt="confirm" />
                </Link>
            </C.IconContainer>
        </C.Container>
    )
}
