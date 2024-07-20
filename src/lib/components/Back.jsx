import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <i className="bi bi-arrow-left-circle" style={{fontSize:"36px"}}></i>
    </button>
  );
};

export default Back;
