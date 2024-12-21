const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-[56px] h-[56px]"
        style={{
          background: `
                  radial-gradient(farthest-side, #3B9DF8 92%, transparent) 50% 0,
                  radial-gradient(farthest-side, #3B9DF8 92%, transparent) 50% 100%,
                  radial-gradient(farthest-side, #3B9DF8 92%, transparent) 100% 50%,
                  radial-gradient(farthest-side, #3B9DF8 92%, transparent) 0 50%
              `,
          backgroundSize: "13.4px 13.4px",
          backgroundRepeat: "no-repeat",
          animation: "spinner-kh173p 1s infinite",
        }}
      >
        <style>
          {`
          @keyframes spinner-kh173p {
            to {
              transform: rotate(0.5turn);
              }
            }
            `}
        </style>
      </div>
    </div>
  );
};

export default Loading;
