export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-950 text-center">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Front Porch America. All rights reserved.
      </p>
      <p className="text-gray-600 text-xs mt-2">
        Hosted by Rickk White
      </p>
    </footer>
  );
}
