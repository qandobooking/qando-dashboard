function DashLoading() {
  const svc = {};

  svc.show = () => {
    console.info('Show loading...');
  };

  svc.hide = () => {
    console.info('Hide loading...');
  };

  return svc;
}

export default DashLoading;
