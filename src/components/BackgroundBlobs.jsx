export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blob 1 */}
      <div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-float"
        style={{ backgroundColor: 'var(--soft-pink)' }}
      />
      {/* Blob 2 */}
      <div 
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full mix-blend-multiply filter blur-[90px] opacity-50 animate-float-delayed"
        style={{ backgroundColor: 'var(--highlight)' }}
      />
      {/* Blob 3 */}
      <div 
        className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-float"
        style={{ backgroundColor: 'var(--primary)' }}
      />
    </div>
  );
}
