import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { MobileFrame } from './components/MobileFrame';
import { FlowDiagram } from './components/FlowDiagram';
import { PresentationNav } from './components/v2/PresentationNav';

// V2 Components (New Flow)
import { LandingPage } from './components/v2/LandingPage';
import { BillPaymentOptOut } from './components/v2/Screen1-BillPaymentOptOut';
import { PaymentSuccess } from './components/v2/Screen2-PaymentSuccess';
import { NotificationEntry } from './components/v2/Screen3-NotificationEntry';
import { Welcome } from './components/v2/Screen4-Welcome';
import { ClassicServices } from './components/v2/Screen5-ClassicServices';
import { AdvancedSelection } from './components/v2/Screen6-AdvancedSelection';
import { FaceScanIntro } from './components/v2/scans/FaceScanIntro';
import { FaceScan } from './components/v2/scans/FaceScan';
import { FaceScanResult } from './components/v2/scans/FaceScanResult';
import { BodyVitalsIntro } from './components/v2/scans/BodyVitalsIntro';
import { BodyVitalsScan } from './components/v2/scans/BodyVitalsScan';
import { BodyVitalsResult } from './components/v2/scans/BodyVitalsResult';
import { RiskAssessmentIntro } from './components/v2/scans/RiskAssessmentIntro';
import { RiskAssessmentScan } from './components/v2/scans/RiskAssessmentScan';
import { RiskAssessmentResult } from './components/v2/scans/RiskAssessmentResult';
import { SymptomChecker } from './components/v2/features/SymptomChecker';
import { HealthTips } from './components/v2/features/HealthTips';
import { MyAccount } from './components/v2/MyAccount';
import { EndorseRequest } from './components/v2/contract/EndorseRequest';
import { CancelRequest } from './components/v2/contract/CancelRequest';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page (Passcode Protected) */}
        <Route path="/" element={<LandingPage />} />

        {/* All other routes wrapped in MobileFrame */}
        <Route path="/*" element={
          <>
            <MobileFrame>
              <Routes>
                {/* V2 - Complete Flow */}
                <Route path="/v2/bill-payment" element={<BillPaymentOptOut />} />
                <Route path="/v2/payment-success" element={<PaymentSuccess />} />
                <Route path="/v2/notification" element={<NotificationEntry />} />
                <Route path="/v2/welcome" element={<Welcome />} />
                <Route path="/v2/classic-services" element={<ClassicServices />} />
                <Route path="/v2/advanced-selection" element={<AdvancedSelection />} />

                {/* Face Scan Flow */}
                <Route path="/v2/face-scan-intro" element={<FaceScanIntro />} />
                <Route path="/v2/face-scan" element={<FaceScan />} />
                <Route path="/v2/face-scan-result" element={<FaceScanResult />} />

                {/* Body Vitals Flow */}
                <Route path="/v2/body-vitals-intro" element={<BodyVitalsIntro />} />
                <Route path="/v2/body-vitals-scan" element={<BodyVitalsScan />} />
                <Route path="/v2/body-vitals-result" element={<BodyVitalsResult />} />

                {/* Risk Assessment Flow */}
                <Route path="/v2/risk-assessment-intro" element={<RiskAssessmentIntro />} />
                <Route path="/v2/risk-assessment-scan" element={<RiskAssessmentScan />} />
                <Route path="/v2/risk-assessment-result" element={<RiskAssessmentResult />} />

                {/* Free Features */}
                <Route path="/v2/symptom-checker" element={<SymptomChecker />} />
                <Route path="/v2/health-tips" element={<HealthTips />} />

                {/* My Account & Contract Management */}
                <Route path="/v2/my-account" element={<MyAccount />} />
                <Route path="/v2/endorse-request" element={<EndorseRequest />} />
                <Route path="/v2/cancel-request" element={<CancelRequest />} />

                {/* Flow Diagram */}
                <Route path="/flow-diagram" element={<FlowDiagram />} />
              </Routes>
            </MobileFrame>
            <PresentationNav />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}