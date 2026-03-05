import React from 'react';

export const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-header" />
            <div className="skeleton-body" />
        </div>
    );
};

export const SkeletonTable = () => {
    return (
        <table className="skeleton-table">
            <thead>
                <tr>
                    <th className="skeleton-cell" />
                    <th className="skeleton-cell" />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="skeleton-cell" />
                    <td className="skeleton-cell" />
                </tr>
            </tbody>
        </table>
    );
};

export const SkeletonStats = () => {
    return (
        <div className="skeleton-stats">
            <div className="skeleton-stat" />
            <div className="skeleton-stat" />
        </div>
    );
};
