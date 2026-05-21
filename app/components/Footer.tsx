import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <div>
              <div className="font-semibold leading-none">WealthRim Group</div>
              <div className="text-[12px] text-zinc-500">© 2012-2024. All rights reserved.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[13px] text-zinc-600">
            <Link href="/privacy" className="hover:text-zinc-900">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-900">Terms</Link>
            <Link href="/careers" className="hover:text-zinc-900">Careers</Link>
            <div className="flex items-center gap-1.5 pl-6 border-l border-zinc-200">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-zinc-500">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}