import React from 'react';
import { HomeMajor, GlobeMajor, VocabularyMajor, CustomersMajor, AppsMajor, SettingsMajor,
  FavoriteMajor,  QuestionMarkMajor, NotificationMajor } from '@shopify/polaris-icons';

  
export  const data = [
  {
    label: "Dashboard",
    path: "/analytics",
    exact: false,
    icon: HomeMajor,
    position: 'left',
    visible: true,
    children: [
      {
        label: "Glossary1",
        path: "/glossary",
        exact: false,
        icon: VocabularyMajor,
      },
      {
        label: "Agency translation2",
        path: "/Agency translation",
        exact: false,
        icon: VocabularyMajor,
      },
    ]  
  }, 
  {
    label: "Translations",
    path: "/analytics",
    exact: true,
    icon: GlobeMajor,
    position: 'left',
    visible: true , 
    children: [
      {
        label: "Glossary3",
        path: "/analytics",
        exact: false,
        icon: VocabularyMajor,
      },
      {
        label: "Agency translation",
        path: "/analytics",
        exact: false,
        icon: VocabularyMajor,
      },
      {
        label: "Agency translation",
        path: "/Agency",
        exact: false,
        icon: VocabularyMajor,
        badge: <div>1</div>,
      },
    ]
  },
  {
    label: "Glossary",
    path: "/Glossary",
    exact: false,
    icon: VocabularyMajor,
    position: 'left',
    visible: true,
  },
  {
    label: "Agency translation",
    path: "/Agency translation",
    exact: false,
    icon: CustomersMajor,
    position: 'left',
    visible: true,
  },
  {
    label: "Integrations",
    path: "/Integrations",
    exact: false,
    icon: AppsMajor,
    position: 'left',
    visible: true,
    badge: 1,
  },
  {
    label: "Settings",
    path: "/Settings",
    exact: false,
    icon: SettingsMajor,
    position: 'left',
    visible: true,
  },
  {
    label: "",
    path: "/analytics",
    exact: false,
    icon: NotificationMajor,
    position: 'right',
    visible: true,
  },
  {
    label: "",
    path: "/analytics",
    exact: false,
    icon: FavoriteMajor,
    position: 'right',
    visible: true,
  },
  {
    label: "",
    path: "/analyticsц",
    exact: false,
    icon: QuestionMarkMajor,
    position: 'right', 
    visible: true,
  },
]
