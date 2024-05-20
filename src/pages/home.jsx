import React from 'react'
import Header from '../components/header/header'
import SectionOne from '../components/section_1/section1'
import SectionTwo from '../components/section_1/section2'
import SectionTwoItems from '../components/section2_items/section2_items'

export default function Home() {


    return (
        <>
        <Header />
        <SectionOne />
        <SectionTwo>
            <SectionTwoItems />
        </SectionTwo>
        </>
    )
}