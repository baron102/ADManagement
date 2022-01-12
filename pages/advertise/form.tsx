import React, { ReactElement } from 'react'
import { Field, useFormikContext } from 'formik';
import dynamic from 'next/dynamic';
import * as C from '../../app/styles/form';
import { Header } from '../../app/patterns/Header';
import { FormCategory } from '../../app/patterns/FormCategory';
import FormGeneralInformation from '../../app/patterns/FormGeneralInformation';
import { PostingPhotos } from '../../app/components/PostingPhotos';
import FormAdvertiseFeatures from '../../app/patterns/FormAdvertiseFeatures';
import { FormikWrapper } from '../../app/patterns/FormikWrapper';
import { FormNavBar } from '../../app/patterns/FormNavBar';
import Link from 'next/link';

const DynamicMap = dynamic(
    () => import('../../app/patterns/FormLocationInformation'),
    { ssr: false }
)

function AdvertiseForm() {
    const { errors } = useFormikContext();
    console.log(errors)
    return (
        <C.Container>
            <FormNavBar />
            <FormCategory />
            <FormGeneralInformation />
            <DynamicMap />
            <Field component={PostingPhotos} />
            <FormAdvertiseFeatures />
            {
                Object.keys(errors).length === 0 && <Link href="/advertise/preview" passHref>
                    <C.Button>Next</C.Button>
                </Link>
            }
        </C.Container>
    )
}

AdvertiseForm.getLayout = function getLayout(page: ReactElement) {
    return (
        <FormikWrapper>
            <Header />
            {page}
        </FormikWrapper>
    )
}

export default AdvertiseForm;