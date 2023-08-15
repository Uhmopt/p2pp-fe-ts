import Layout from "pages/layout";
import NotFoundPage from "pages/misc/NotFoundPage";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ClientOverviewPage = lazy(() => import("pages/client/overview"));

const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<ClientOverviewPage />} />
					{/* fallback 404 page */}
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
