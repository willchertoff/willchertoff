---
title: Health Care Provider Directory
date: "2016-12-2"
path: "/hcpd/"
---

Web based software containing: a database of physicians and a front end search platform for the physician listings. 

### API 

The API was to sit independently from all individual front end instances. In order to build a dependable API, I knew I had to modify my development process to ensure that no garbage code was kept around. To do this, I configured my workflow with Commitizen, which allowed for custom checks before each commit was made. The custom checks I implemented were: Mocha Tests, Code Coverage and ESLint.

#### Technologies used
* Node JS
* Express JS
* Mongo Db
* ES6
* Gulp
* Mocha

### Font-End

The front end application spec required: the application to be embeded on any site, stand alone on it's own and be able to access different lists of physicians.

The physicians list was to be able to be filtered by a variety of filters, all customized by the client. For this, I knew that I had to include the site customization options inside the API above. The front-end app would then load them in upon startup.

My first challenge was to integrate asynchronus API calls with the Redux framework. To anyone familiar with Redux, this was my reducer allowing me to make an API call to recieve the list of physicians for a given site:

```javascript
export default function doctors(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DOCTORS_REQUEST: 
      return { ...state,
        siteID: action.siteID,
        loading: true,
      }
    case types.FETCH_DOCTORS_SUCCESS:
      return { ...state,
        listings: action.doctors,
        loading: false
      }
    case types.FILTER_DOCTORS_START:
      return { ...state, 
        filtering: true
      }
    case types.FILTER_DOCTORS_FINISH: 
      return { ...state,
        filtering: false
      }
    default:
      return state;
  }
}
```

Splitting the API request into 3 states allowed for separate UI changes based upon each state: loading, success and error.



#### Technologies used
* React JS
* Redux
* ES6
* Webpack