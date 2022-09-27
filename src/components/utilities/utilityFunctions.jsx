import Loading from "../Loading";

export const indicateLoading = () => {
  return (
    <div className="flex flex-ali-center flex-column">
      <h2 className="text-center">Loading...</h2>
      <Loading className="loading-icon" />
    </div>
  );
};
