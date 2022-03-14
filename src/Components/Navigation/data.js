import { HomeMajor, GlobeMajor, VocabularyMajor, CustomersMajor, AppsMajor, SettingsMajor,
  FavoriteMajor,  QuestionMarkMajor, NotificationMajor } from '@shopify/polaris-icons';
  
export  const data = [
  {
    label: "Dashboard",
    path: "/analytics",
    exact: false,
    icon: HomeMajor,
    position: 'left',
    visible: true  
  }, 
  {
    label: "Translations",
    exact: false,
    icon: GlobeMajor,
    position: 'left',
    visible: true , 
    children: [
      {
        label: "Glossary",
        path: "/analytics",
        exact: false,
        icon: VocabularyMajor
      },
      {
        label: "Agency translation",
        path: "/analytics",
        exact: false,
        icon: VocabularyMajor
      },
    ]
  },
  {
    label: "Glossary",
    path: "/analytics",
    exact: false,
    icon: VocabularyMajor,
    position: 'left',
    width: 0,  
    visible: true
  },
  {
    label: "Agency translation",
    path: "/analytics",
    exact: false,
    icon: CustomersMajor,
    position: 'left',
    width: 0, 
    visible: true 
  },
  {
    label: "Integrations",
    path: "/analytics",
    exact: false,
    icon: AppsMajor,
    position: 'left',
    visible: true 
  },
  {
    label: "Settings",
    path: "/analytics",
    exact: false,
    icon: SettingsMajor,
    position: 'left',
    visible: true 
  },
  {
    label: "",
    path: "/analytics",
    exact: false,
    icon: FavoriteMajor,
    position: 'right',
    visible: true
  },
  {
    label: "",
    path: "/analytics",
    exact: false,
    icon: QuestionMarkMajor,
    position: 'right', 
    visible: true
  },
  {
    label: "",
    path: "/analytics",
    exact: false,
    icon: NotificationMajor,
    position: 'right',
    visible: true 
  },
]