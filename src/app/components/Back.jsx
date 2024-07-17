import { useRouter } from 'next/navigation'

const Back = () => {
  const router = useRouter()
  return (
    <div>
      <button className="btn btn-circle btn-outline p-2 absolute sm:top-12 sm:left-12 top-4 left-4" onClick={() => router.back()}>
      <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M14.389 7.956v4.374l1.056 0.010c7.335 0.071 11.466 3.333 12.543 9.944-4.029-4.661-8.675-4.663-12.532-4.664h-1.067v4.337l-9.884-7.001 9.884-7zM15.456 5.893l-12.795 9.063 12.795 9.063v-5.332c5.121 0.002 9.869 0.26 13.884 7.42 0-4.547-0.751-14.706-13.884-14.833v-5.381z" fill="currentColor"> </path> </g>
        </svg>
      </button>
    </div>
  );
};

export default Back;
