import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useState } from 'react';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Interactive = {
  name: 'Interactive',
  render: () => {
    const [page, setPage] = useState(3);
    const total = 10;
    return (
      <div className="space-y-3 text-center">
        <p className="text-sm text-muted-foreground">Page {page} of {total}</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => setPage(Math.max(1, page - 1))} href="#" />
            </PaginationItem>
            {Array.from({ length: total }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === total || Math.abs(p - page) <= 1)
              .reduce((acc, p, i, arr) => {
                if (i > 0 && p - arr[i - 1] > 1) acc.push('...');
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === '...'
                  ? <PaginationItem key={`e${i}`}><PaginationEllipsis /></PaginationItem>
                  : <PaginationItem key={p}>
                      <PaginationLink href="#" isActive={p === page} onClick={() => setPage(p)}>{p}</PaginationLink>
                    </PaginationItem>
              )}
            <PaginationItem>
              <PaginationNext onClick={() => setPage(Math.min(total, page + 1))} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
};
