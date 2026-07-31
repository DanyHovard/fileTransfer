import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Security from "./pages/Security";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// SEO Pages
import WebRTCFileTransfer from "./pages/seo/WebRTCFileTransfer";
import P2PFileSharing from "./pages/seo/P2PFileSharing";
import NoUploadFileTransfer from "./pages/seo/NoUploadFileTransfer";
import PrivateFileTransfer from "./pages/seo/PrivateFileTransfer";
import BrowserToBrowserTransfer from "./pages/seo/BrowserToBrowserTransfer";
import SendLargeFiles from "./pages/seo/SendLargeFiles";
import RelayVsWeTransfer from "./pages/seo/RelayVsWeTransfer";
import WebRTCSecurity from "./pages/seo/WebRTCSecurity";
import TurnVsStun from "./pages/seo/TurnVsStun";
import OpenSourceFileSharing from "./pages/seo/OpenSourceFileSharing";
import HowP2PWorks from "./pages/seo/HowP2PWorks";
import WeTransferAlternative from "./pages/seo/WeTransferAlternative";
import HowToSendLargeFiles from "./pages/seo/HowToSendLargeFiles";
import HowWebRTCWorks from "./pages/seo/HowWebRTCWorks";
import DirectFileTransfer from "./pages/seo/DirectFileTransfer";
import SelfHostedFileSharing from "./pages/seo/SelfHostedFileSharing";
import RelayVsGoogleDrive from "./pages/seo/RelayVsGoogleDrive";
import RelayVsSnapdrop from "./pages/seo/RelayVsSnapdrop";
import RelayVsShareDrop from "./pages/seo/RelayVsShareDrop";
import SecureDeviceTransfer from "./pages/seo/SecureDeviceTransfer";
import TransferWithoutCloud from "./pages/seo/TransferWithoutCloud";
import TemporaryFileSharing from "./pages/seo/TemporaryFileSharing";
import VerifyIdentity from "./pages/VerifyIdentity";
import ScrollToTop from "./components/ScrollToTop";

const PORTFOLIO_URL = "https://kharytonyk.eu.org/";

function PortfolioLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={PORTFOLIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center rounded-[8px] bg-white/10 hover:bg-white/15 border border-white/20 hover:border-brand-neon/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${
        compact ? "gap-0.5 px-4 py-2" : "gap-2 px-8 py-4"
      }`}
    >
      <span
        className={`font-semibold text-white group-hover:text-brand-neon transition-colors font-sans ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        Portfolio
      </span>
      <span className="text-[10px] text-white/50 group-hover:text-white/70 transition-colors font-pixel-grid tracking-widest uppercase">
        Go to main
      </span>
    </a>
  );
}

function Header() {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 md:h-24 px-4 md:px-8 flex items-center justify-between z-50 backdrop-blur-xl bg-surface/50 border-b border-surface-border shadow-sm ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <Link
        to="/"
        className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
        title="Relay Home"
      >
        <span className="font-pixel-square text-2xl md:text-3xl tracking-tight text-white transition-colors uppercase">
          Relay
        </span>
      </Link>
      <PortfolioLink compact />
    </header>
  );
}

export default function App() {
  return (
    <div
      className={`min-h-screen relative flex flex-col font-sans text-white bg-surface selection:bg-brand-neon/30 selection:text-white overflow-x-hidden w-full max-w-[100vw] ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable}`}
    >
      <ScrollToTop />
      {/* Premium Grain Texture Overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          mixBlendMode: "soft-light",
        }}
      ></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#F5F2EB] opacity-[0.02] mix-blend-color-burn"></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50 blur-3xl animate-aurora"></div>
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-neon/10 via-transparent to-transparent opacity-50 blur-3xl animate-aurora"
        style={{ animationDelay: "-12.5s" }}
      ></div>
      <Header />
      <div className="flex-1 flex flex-col relative z-10 pt-20 md:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/security" element={<Security />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/webrtc-file-transfer" element={<WebRTCFileTransfer />} />
          <Route path="/peer-to-peer-file-sharing" element={<P2PFileSharing />} />
          <Route path="/send-files-without-uploading" element={<NoUploadFileTransfer />} />
          <Route path="/private-file-transfer" element={<PrivateFileTransfer />} />
          <Route path="/browser-to-browser-file-transfer" element={<BrowserToBrowserTransfer />} />
          <Route path="/best-way-to-send-large-files" element={<SendLargeFiles />} />
          <Route path="/relay-vs-wetransfer" element={<RelayVsWeTransfer />} />
          <Route path="/webrtc-security" element={<WebRTCSecurity />} />
          <Route path="/turn-vs-stun" element={<TurnVsStun />} />
          <Route path="/open-source-file-sharing" element={<OpenSourceFileSharing />} />
          <Route path="/how-p2p-file-transfer-works" element={<HowP2PWorks />} />
          <Route path="/wetransfer-alternative" element={<WeTransferAlternative />} />
          <Route path="/send-large-files" element={<HowToSendLargeFiles />} />
          <Route path="/how-webrtc-file-sharing-works" element={<HowWebRTCWorks />} />
          <Route path="/how-direct-file-transfer-works" element={<DirectFileTransfer />} />
          <Route path="/self-hosted-file-sharing" element={<SelfHostedFileSharing />} />
          <Route path="/relay-vs-google-drive" element={<RelayVsGoogleDrive />} />
          <Route path="/relay-vs-snapdrop" element={<RelayVsSnapdrop />} />
          <Route path="/relay-vs-sharedrop" element={<RelayVsShareDrop />} />
          <Route path="/secure-file-transfer-between-devices" element={<SecureDeviceTransfer />} />
          <Route path="/transfer-files-without-cloud-storage" element={<TransferWithoutCloud />} />
          <Route path="/temporary-file-sharing" element={<TemporaryFileSharing />} />
          <Route path="/verify-identity" element={<VerifyIdentity />} />
        </Routes>
      </div>

      <footer className="w-full max-w-[100vw] relative bg-surface/50 backdrop-blur-lg py-12 md:py-16 mt-auto z-10 flex flex-col items-center border-t border-surface-border shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <PortfolioLink />
      </footer>
    </div>
  );
}
