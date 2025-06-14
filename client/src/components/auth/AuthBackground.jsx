const AuthBackground = () => {
  return (
    <div className="absolute inset-0 z-0 !w-[100vw]">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-tertiary to-dark opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/auth-pattern.svg')] bg-repeat opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent"></div>
    </div>
  );
};

export default AuthBackground;