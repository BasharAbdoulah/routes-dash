import { Table } from "antd";
import useFetch from "hooks/useFetch";
import React, { useEffect, useState } from "react";

function OnlinePassengers() {
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);

    const {
        data = [],
        error,
        loading,
        executeFetch,
    } = useFetch(
        "https://route.click68.com/api/ListPaymentWallet",
        "post",
        {},
        true
    );

    useEffect(() => {
        // let isFound = tableData.find((d) => d.page === currentPage);
        if (true) executeFetch({ PageNumber: currentPage });
    }, [currentPage]);

    console.log("passengers", data);
    const columns = [
        {
            title: "User Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Route",
            dataIndex: "routeName",
            key: "routeName",
        },
        {
            title: "value",
            dataIndex: "value",
            key: "value",
        },
        {
            title: "date",
            dataIndex: "date",
            key: "date",
            render: (data) => {
                if (data.length > 20)
                    return (
                        <React.Fragment key={data}>
                            {data.substring(0, 10)} {data.substring(11, 16)}{" "}
                        </React.Fragment>
                    );
            },
        },
    ];

    console.log("test", data?.description);
    return (
        <div>
            <h2 className="passengers-title on">Online Passengers</h2>
            <Table
                columns={columns}
                rowKey={"id"}
                pagination={{
                    onChange: (page) => {
                        setCurrentPage(page);
                    },
                    total: data?.total,
                    current: currentPage,
                }}
                dataSource={data?.description}
                loading={loading}
                size="small"
            />
        </div>
    );
}

export default OnlinePassengers;
