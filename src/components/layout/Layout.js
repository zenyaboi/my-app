import MainNavegation from './MainNavegation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavegation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;