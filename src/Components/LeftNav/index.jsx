import React from 'react';
import {Navigation, Card} from '@shopify/polaris';
import { HomeMajor, OrdersMajor, ProductsMajor } from '@shopify/polaris-icons';

const LeftNav = () => {


return (
  <Card>
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '/',
            label: 'Home',
            icon: HomeMajor,
          },
          {
            url: '/path/to/place',
            label: 'Orders',
            icon: OrdersMajor,
            badge: '15',
          },
          {
            url: '/path/to/place',
            label: 'Products',
            icon: ProductsMajor,
          },
        ]}
      />
    </Navigation>
  </Card>
)
}

export default LeftNav;