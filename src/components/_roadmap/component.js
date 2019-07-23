// components roadmap
/*
component: {
  App: {
    MenuGroup: {
      menuLists: {
        headerLeft: [{ name, path, childnode }] 
        headerRight: [{ name, path, childnode }] 
        sideBarLists: {
          InitialMenus: [{ name, path, childnode }]
          MemberMenus: [{ name, path, childnode }]
          SettingsMenus: [{ name, path, childnode }]
          CategoryMenus: [{ name, path, childnode }]          
        }
      }
      Header: { -> childnode: <SearchBar />}   
      Sidebar: {   // sidebar menu changed depending on pages
        -> redux state: header menu page path 
        -> if ( path ? : ) - return (sideBarLists)
      }
    }

    Home: {
      Banner
      BestSpaces
      BestShops
      BestProducts
    }

    Shops: {
      index: {
        shopSources: from server (local data)
        childnod: <ShopForm sources={shopSources}/>
      }
        ShopForm: {
          return shop forms for shop list data from server
        }
    }

    Products: {
      index: {
        itemSources: from server (local data)
        childnod: <itemForm sources={itemSources}/>
      }
        ShopForm: {
          return item forms for item list data from server
        }
    }

    Search: {
      index: {
        itemSources: from server (local data)
        childnod: <itemForm sources={itemSources}/>
      }
        SearchBar: {
          return item forms for item list data from server
        }
    }
    

    }
  }
}
*/

