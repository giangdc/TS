import { defineConfig, devices } from '@playwright/test';

/**
 * Cấu hình Playwright cho repo luyện tập cohort.
 * baseURL mặc định = SauceDemo (app công khai dùng xuyên suốt các bài).
 * TodoMVC (Bài 7–9) dùng URL đầy đủ trong test, không qua baseURL.
 */
export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true, // Chạy test song song trong 1 file test (default = false)
  forbidOnly: !!process.env.CI,  // Fail nếu có test.only trong CI (default = false)
  retries: process.env.CI ? 2 : 0,  // Chạy lại test khi fail (default = 0)
  workers: process.env.CI ? 4 : 2,   // Số luồng chạy test song song (default = CPU cores)
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list'],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://staging.tongdaiwifi.vn',
    trace: 'on-first-retry', // Ghi lại trace khi test fail (default = 'off')
    screenshot: 'on', // Chụp màn hình khi test fail (default = 'off')
    video: 'retain-on-failure',// Quay video khi test fail (default = 'off')
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [
    { name: 'chromium', 
      use: { ...devices['Desktop Chrome'] } ,
      dependencies: ["setup"], 
    },
    { name: "setup", testMatch: /.*\.setup\.ts/ },

    // Mở thêm khi cần kiểm thử đa trình duyệt:
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit',  use: { ...devices['Desktop Safari'] } },
  ],
});
