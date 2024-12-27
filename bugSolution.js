```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Correct usage of router.push with dynamic segments
    router.push('/my-page/[id]', '/my-page/123'); 
  };

  return (
    <button onClick={handleClick}>
      Go to My Page
    </button>
  );
}

export default MyComponent;
```