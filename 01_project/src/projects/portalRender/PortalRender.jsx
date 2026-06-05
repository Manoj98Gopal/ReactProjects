import { useState } from "react";
import Modal from "./Modal";
import ModalWithPortal from "./ModalWithPortal";

const PortalRender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div className="space-y-8 pt-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          React DOM
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Portal Render
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          A portal lets React render a component into a different DOM node while
          keeping it in the same React component tree.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Problem</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            A modal rendered inside a parent can be clipped by parent CSS like
            overflow-hidden, transforms, or stacking contexts.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Portal Code</h2>
          <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-xs leading-6 text-slate-100">
            <code>{`createPortal(
  <Modal />,
  document.getElementById("portal-root")
);`}</code>
          </pre>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Result</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The portal modal appears above the whole page because it is mounted
            under the separate #portal-root element in index.html.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Without Portal
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              This modal is rendered inside the dashboard container, so the
              container clips it.
            </p>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg border-2 border-red-300 bg-white p-6 shadow-sm">
            <div className="absolute right-3 top-3 rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-700">
              overflow-hidden
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Dashboard Container
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              The modal belongs to this box in the DOM. It cannot visually
              escape this parent.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <h3 className="text-xl font-bold text-slate-950">
                Normal Modal
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                I am still inside the dashboard container.
              </p>
            </Modal>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-950">With Portal</h2>
            <p className="mt-1 text-sm text-slate-600">
              This modal is declared here in React, but mounted outside the app
              container in the DOM.
            </p>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg border-2 border-emerald-300 bg-white p-6 shadow-sm">
            <div className="absolute right-3 top-3 rounded bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
              portal-root
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              Dashboard Container
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              The modal escapes the clipped parent because React places its DOM
              nodes under #portal-root.
            </p>

            <button
              type="button"
              onClick={() => setIsPortalOpen(true)}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Open Modal
            </button>

            <ModalWithPortal
              isOpen={isPortalOpen}
              onClose={() => setIsPortalOpen(false)}
            >
              <h3 className="text-xl font-bold text-slate-950">
                Portal Modal
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                I am rendered by this component, but mounted in #portal-root.
              </p>
            </ModalWithPortal>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5">
        <h2 className="text-lg font-bold text-slate-950">Simple Rule</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Use portals for UI that should visually break out of its parent, like
          modals, popovers, tooltips, drawers, and global notifications.
        </p>
      </section>
    </div>
  );
};

export default PortalRender;
