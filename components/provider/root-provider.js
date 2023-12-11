'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const RootProvider = ({ children }) => {
  const cache = React.useMemo(() => createCache(), []);

  //for tanStack query confif provider
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0, //Thời gian để cache không revalide lại trong thời gian set phút, sau sau thời gian set thì query sẽ được fetch lại nếu truy cập
            gcTime: 1000 * 60 * 5, //Sẽ dọn dẹp cache nếu cache đó bị vô hiệu hóa (ví dụ cache ở trang A nhưng user sang trang B và họ ở đón hơn 5p ) thì cache ở trang A sẽ được dọn dẹp
            refetchOnWindowFocus: false, //Khong fetch lại data khi ấn chuột vào bất cứ đâu trong trình duyệt
            refetchOnReconnect: false, //Không fetch lại data khi mất kết nối và sau đó có kết nối lại internet
            retryOnMount: false, //Không retry lại data nếu query đó có error xảy ra
          },
        },
      }),
  );

  const isServerInserted = React.useRef(false); // Định nghĩa và khởi tạo giá trị của isServerInserted

  useServerInsertedHTML(() => {
    // avoid duplicate css insert
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });
  return (
    <StyleProvider hashPriority="high" cache={cache}>
      <ConfigProvider theme={{ token: { colorPrimary: '#096DC7' } }}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default RootProvider;
