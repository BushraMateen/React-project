
import React, { Component } from 'react';
import './App.css';
// import Greet from './Components/Greet'
// import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent';
import UserGreting from './Components/UserGreting';
import NameList from './Components/NameList';
import Stylesheets from './Components/Stylesheets';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form'
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import Hovercounter from './Components/HoverCounter';


class App extends Component {
  render () {
    return (
      <div className="App">
        <ClickCounter name='Bushra' />
        <Hovercounter />
        {/* <ErrorBoundary>
          <Hero heroName = 'Bamtman'/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName = 'Superman'/>
        </ErrorBoundary>

        <ErrorBoundary>
            <Hero heroName = 'Joker'/>
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheets primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreting /> */}
        {/* <ParentComponent /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Greet name="Bruce" heroname="batman"/>
        <Greet name = "Bruce"  heroname="superman" />
        <Welcome name="Bruce" heroname="batman"/>
        <Welcome name = "Bruce"  heroname="superman" /> */}

      </div>
    );
  }
}
export default App;
