import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import AccessoryCard from '../components/AccessoryCard'
import accessoryData from '../assets/fake-data/accessories'
import banner from '../assets/images/banner1.jpg'

const Accessory = () => {
    return (
        <Helmet title="Phụ kiện">
           
           
            
            <Section>
                <SectionTitle>
                    top phụ kiện bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            accessoryData.getAccessories(4).map((item, index) => (
                                <AccessoryCard
                                    key={index}
                                    image={item.image}
                                    name={item.title}
                                    price={Number(item.price)}
                                   
                                    
                                    
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            accessoryData.getAccessories(8).map((item, index) => (
                                <AccessoryCard
                                    key={index}
                                    image={item.image}
                                    name={item.title}
                                    price={Number(item.price)}
                                    
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            accessoryData.getAccessories(12).map((item, index) => (
                                <AccessoryCard
                                    key={index}
                                    image={item.image}
                                    name={item.title}
                                    price={Number(item.price)}
                              
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Accessory;
